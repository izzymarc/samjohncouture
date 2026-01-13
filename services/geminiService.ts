
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getStyleAdvice = async (prompt: string, imageBase64?: string) => {
  const model = ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: imageBase64 
      ? { 
          parts: [
            { inlineData: { mimeType: 'image/jpeg', data: imageBase64 } },
            { text: `You are the Samjohn Couture AI Personal Stylist. Based in Abuja, Nigeria, we specialize in Native attire (Agbada, Senator, Kaftan) and Western suits. 
                    Analyze this image or request and provide fashion advice. If the user asks for a recommendation, return it in a structured way.
                    User Request: ${prompt}` }
          ] 
        }
      : prompt,
    config: {
      systemInstruction: "You are the head stylist at Samjohn Couture in Abuja. You know everything about Nigerian 'Native' fashion and high-end bespoke tailoring. Be polite, luxury-oriented, and professional.",
    }
  });

  const response = await model;
  return response.text;
};

export const getRecommendedStyles = async (userDescription: string) => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Based on the following description, recommend 3 specific outfits from our range (Native, Suits, or Casual).
               User: ${userDescription}`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            styleName: { type: Type.STRING },
            occasion: { type: Type.STRING },
            fabricSuggestion: { type: Type.STRING },
            description: { type: Type.STRING }
          },
          required: ["styleName", "occasion", "fabricSuggestion", "description"]
        }
      }
    }
  });

  return JSON.parse(response.text || '[]');
};
