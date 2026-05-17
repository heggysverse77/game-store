import { createContext, useContext, useState, useEffect} from 'react';
export interface WebsiteSettings {
  siteName: string;
  siteNameArabic: string;
  logo: string;
  favicon: string;
  heroBackgroundImage: string;
  phone: string;
  email: string;
  address: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  facebookUrl: string;
  twitterUrl: string;
  instagramUrl: string;
  linkedinUrl: string;
}
const defaultSettings: WebsiteSettings = {
  siteName: 'gamesoft',
  siteNameArabic: 'جيم سوفت',
  logo: '',
  favicon: '',
  heroBackgroundImage: '',
  phone: '+201099925890',
  email: 'heggysverse77@gmail.com',
  address: 'القاهرة، مصر',
  description: 'منصة رائدة في مجال الالعاب في مصر',
  metaTitle: 'دار العقار - أفضل الالعاب في مصر',
  metaDescription: 'اكتشف أفضل الالعاب في مصر مع دار العقار',
  facebookUrl: '',
  twitterUrl: '',
  instagramUrl: '',
  linkedinUrl: '',
};
interface SettingsContextType {
  settings: WebsiteSettings;
  updateSettings: (newSettings: Partial<WebsiteSettings>) => Promise<void>;
  loading: boolean;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);
export function SettingsProvider({children}: {children:React.ReactNode}){
  const [settings, setSettings] = useState<WebsiteSettings>(defaultSettings);
  const [loading, setLoading] = useState(false);

  const updateSettings = async (newSettings: Partial<WebsiteSettings>) => {
    setLoading(true);
    // هنا يمكنك إضافة كود لحفظ الإعدادات في قاعدة البيانات مستقبلاً
    setSettings((prev) => ({ ...prev, ...newSettings }));
    setLoading(false);
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings, loading }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}
