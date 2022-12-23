import { Font } from "@react-pdf/renderer"

import uaBrand from "../../../assets/fonts/ua-brand.ttf"
import uaBrandBold from "../../../assets/fonts/ua-brand-Bold.ttf"
import BarcadeBrawl from "../../../assets/fonts/Barcade-Brawl.ttf"

Font.register({
  family: "ua-brand",
  fonts: [{ src: uaBrand }, { src: uaBrandBold, fontWeight: 700 }]
})

Font.register({
  family: "Barcade-Brawl",
  src: BarcadeBrawl
})
