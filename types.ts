
export interface Product {
  id: string;
  name: string;
  category: 'Native' | 'Suits' | 'Casual';
  image: string;
  description: string;
  price?: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  image?: string;
}

export interface StylingRecommendation {
  styleName: string;
  occasion: string;
  fabricSuggestion: string;
  description: string;
}
