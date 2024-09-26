import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "es",
    resources: {
      es: {
        translation: {
          "Fiction / General": "Ficción / General",
          "Biography & Autobiography / Literary Figures":
            "Biografía y Autobiografía / Figuras Literarias",
          "Biography & Autobiography / General":
            "Biografía y Autobiografía / General",
          "Art / Individual Artists / Monographs":
            "Arte / Artistas Individuales / Monografías",
          "Art / European": "Arte / Europeo",
          "Art / Subjects & Themes / Landscapes & Seascapes":
            "Arte / Temas / Paisajes y Marinas",
          "Science / Astronomy": "Ciencia / Astronomía",
          "Technology & Engineering / Agriculture / General":
            "Tecnología e Ingeniería / Agricultura / General",
          "History / General": "Historia / General",
          "Cooking / General": "Cocina / General",
          "Health & Fitness / General": "Salud y Fitness / General",
          "Business & Economics / General": "Negocios y Economía / General",
          "Computers / Programming / General":
            "Computadoras / Programación / General",
          "Philosophy / General": "Filosofía / General",
          "Religion / General": "Religión / General",
          "Travel / General": "Viajes / General",
          "Sports & Recreation / General": "Deportes y Recreación / General",
          "Law / General": "Derecho / General",
          "Education / General": "Educación / General",
          "Medical / General": "Medicina / General",
          "Social Science / General": "Ciencias Sociales / General",
          "Mathematics / General": "Matemáticas / General",
          "Psychology / General": "Psicología / General",
          "Music / General": "Música / General",
          "Drama / General": "Drama / General",
          "Science / Physics / General": "Ciencia / Física / General",
          "Nature / General": "Naturaleza / General",
          "Poetry / General": "Poesía / General",
          "Literary Criticism / Comics & Graphic Novels":
            "Crítica Literaria / Cómics y Novelas Gráficas",
          "Fiction / Horror": "Ficción / Horror",
          "Fiction / Romance / Contemporary":
            "Ficción / Romance / Contemporáneo",
          "Fiction / Gothic": "Ficción / Gótico",
          "Fiction / Romance / Historical": "Ficción / Romance / Histórico",
          "Fiction / Romance / Paranormal": "Ficción / Romance / Paranormal",
          "Fiction / Romance / Suspense": "Ficción / Romance / Suspense",
          "Fiction / Romance / Western": "Ficción / Romance / Western",
          "Fiction / Romance / Regency": "Ficción / Romance / Regencia",
          "Fiction / Romance / Fantasy": "Ficción / Romance / Fantasía",
          "Fiction / Romance / Clean & Wholesome":
            "Ficción / Romance / Limpio y Saludable",
          "Fiction / Romance / Military": "Ficción / Romance / Militar",
          "Fiction / Romance / New Adult": "Ficción / Romance / Adulto Joven",
          "Fiction / Romance / Romantic Comedy":
            "Ficción / Romance / Comedia Romántica",
          Photographers: "Fotógrafos",
          "Biography & Autobiography / Artists, Architects":
            "Biografía y Autobiografía / Artistas, Arquitectos",
          "Fiction / Action & Adventure": "Ficción / Acción y Aventura",
          "Medical / Neuroscience": "Medicina / Neurociencia",
          "History / Expeditions & Discoveries":
            "Historia / Expediciones y Descubrimientos",
          "Technology & Engineering / Inventions":
            "Tecnología e Ingeniería / Inventos",
          "Science / General": "Ciencia / General",
          "Philosophy / Zen": "Filosofía / Zen",
          "Fiction / Romance / General": "Ficción / Romance / General",
          "Literary Criticism / General": "Crítica Literaria / General",
          "Literary Collections": "Colecciones Literarias",
          "Literary Collections / Essays, Social Science / Sociology / Marriage & Family":
            "Colecciones Literarias / Ensayos, Ciencias Sociales / Sociología / Matrimonio y Familia",
          "Literary Collections / Essays, Social Science / Sociology / Marriage & Family, Social Science / Sociology / General":
            "Colecciones Literarias / Ensayos, Ciencias Sociales / Sociología / Matrimonio y Familia, Ciencias Sociales / Sociología / General",
          "Literary Collections / Essays, Social Science / Sociology":
            "Colecciones Literarias / Ensayos, Ciencias Sociales / Sociología",
          "Literary Collections / Essays, Social Science":
            "Colecciones Literarias / Ensayos, Ciencias Sociales",
          "Fiction / Literary": "Ficción / Literaria",
          "Fiction / Dystopian": "Ficción / Distópica",
          "Fiction / Biographical": "Ficción / Biográfica",
          "Fiction / Thrillers": "Ficción / Thrillers",
          "Fiction / Science Fiction / General":
            "Ficción / Ciencia Ficción / General",
          "Fiction / Fantasy / General": "Ficción / Fantasía / General",
          "Fiction / Thrillers / Suspense": "Ficción / Thrillers / Suspense",
          "Fiction / Mystery & Detective / General":
            "Ficción / Misterio y Detectives / General",
          "Fiction / Action & Adventure / General":
            "Ficción / Acción y Aventura / General",
          "Fiction / Historical / General": "Ficción / Histórico / General",
          "Fiction / Family Life / General":
            "Ficción / Vida Familiar / General",
          "Fiction / Coming of Age": "Ficción / Crecimiento",
          "Fiction / War & Military": "Ficción / Guerra y Militar",
          "Fiction / Humorous / General": "Ficción / Humor / General",
          "Fiction / Psychological": "Ficción / Psicológica",
          "Fiction / Urban": "Ficción / Urbana",
          "Fiction / Thrillers / General": "Ficción / Thrillers / General",
          "Fiction / Fantasy / Epic": "Ficción / Fantasía / Épica",
          "Fiction / Science Fiction / Adventure":
            "Ficción / Ciencia Ficción / Aventura",
          "Fiction / Sagas": "Ficción / Sagas",
          "Fiction / Magical Realism": "Ficción / Realismo Mágico",
          "Fiction / Hispanic & Latino": "Ficción / Hispano y Latino",
          "Juvenile Fiction / General": "Ficción Juvenil / General",
          "Juvenile Nonfiction / General": "No Ficción Juvenil / General",
          "Juvenile Fiction / Fantasy & Magic":
            "Ficción Juvenil / Fantasía y Magia",
          "Juvenile Fiction / Action & Adventure / General":
            "Ficción Juvenil / Acción y Aventura / General",
          "Juvenile Fiction / Animals / General":
            "Ficción Juvenil / Animales / General",
          "Juvenile Fiction / Family / General":
            "Ficción Juvenil / Familia / General",
          "Juvenile Fiction / Social Themes / General":
            "Ficción Juvenil / Temas Sociales / General",
          "Juvenile Fiction / Love & Romance":
            "Ficción Juvenil / Amor y Romance",
          "Juvenile Fiction / Mysteries & Detective Stories":
            "Ficción Juvenil / Misterios y Detectives",
          "Juvenile Fiction / Science Fiction / General":
            "Ficción Juvenil / Ciencia Ficción / General",
          "Juvenile Fiction / Horror & Ghost Stories":
            "Ficción Juvenil / Horror y Fantasmas",
          "Juvenile Fiction / Humorous Stories":
            "Ficción Juvenil / Historias Divertidas",
          "Juvenile Fiction / Historical / General":
            "Ficción Juvenil / Histórico / General",
          "Juvenile Fiction / Religious / General":
            "Ficción Juvenil / Religioso / General",
          "Juvenile Fiction / Comics & Graphic Novels / General":
            "Ficción Juvenil / Cómics y Novelas Gráficas / General",
          "Juvenile Fiction / Performing Arts / General":
            "Ficción Juvenil / Artes Escénicas / General",
          "Juvenile Fiction / Readers / General":
            "Ficción Juvenil / Lectores / General",
          "Juvenile Fiction / Fairy Tales & Folklore / General":
            "Ficción Juvenil / Cuentos de Hadas y Folclore / General",
          "Juvenile Fiction / Media Tie-In / General":
            "Ficción Juvenil / Vinculación de Medios / General",
          "Juvenile Fiction / Short Stories":
            "Ficción Juvenil / Cuentos Cortos",
          "Juvenile Fiction / Sports & Recreation / General":
            "Ficción Juvenil / Deportes y Recreación / General",
          "Juvenile Fiction / School & Education / General":
            "Ficción Juvenil / Escuela y Educación / General",
          "Juvenile Fiction / Historical / United States / General":
            "Ficción Juvenil / Histórico / Estados Unidos / General",
          "Juvenile Fiction / Fantasy & Magic / General":
            "Ficción Juvenil / Fantasía y Magia / General",
          "Juvenile Fiction / Action & Adventure / Pirates":
            "Ficción Juvenil / Acción y Aventura / Piratas",
          "Juvenile Fiction / Action & Adventure / Survival Stories":
            "Ficción Juvenil / Acción y Aventura / Historias de Supervivencia",
            "Biography & Autobiography / Women" : "Biografía y Autobiografía / Mujeres",
            " Photographers" : "Fotógrafos",
            "Biography & Autobiography / Artists, Architects, Photographers" : "Biografía y Autobiografía / Artistas, Arquitectos, Fotógrafos",
            "Literary Collections / Essays" : "Colecciones Literarias / Ensayos",
            "Social Science / Sociology / Marriage & Family" : "Ciencias Sociales / Sociología / Matrimonio y Familia",
            "Social Science / Sociology / General" : "Ciencias Sociales / Sociología / General",
            "Fiction / World Literature / Ireland / 21st Century" : "Ficción / Literatura Mundial / Irlanda / Siglo XXI",
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
