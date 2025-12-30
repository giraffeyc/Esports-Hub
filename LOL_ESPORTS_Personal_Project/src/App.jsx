import {Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import LCK from './Pages/LCK'
import LPL from './Pages/LPL'
import LCS from './Pages/LCS'
import LEC from './Pages/LEC'
import BNK_FEARX from './Pages/BNK_FEARX'
import BRO from './Pages/BRO'
import DNF from './Pages/DNF'
import DK from "./Pages/DK"
import DRX from "./Pages/DRX"
import GENG from "./Pages/GENG"
import HLE from "./Pages/HLE"
import KT from "./Pages/KT"
import NS from "./Pages/NS"
import T1 from "./Pages/T1"
import AL from "./Pages/AL"
import BLG from "./Pages/BLG"
import EDG from "./Pages/EDG"
import IG from "./Pages/IG"
import JDG from "./Pages/JDG"
import LGD from "./Pages/LGD"
import LNG from "./Pages/LNG"
import NIP from "./Pages/NIP"
import WBG from "./Pages/WBG"
import TES from "./Pages/TES"
import OMG from "./Pages/OMG"
import WE from "./Pages/WE"
import TT from "./Pages/TT"
import UP from "./Pages/UP"
import C9 from "./Pages/C9"
import DIG from "./Pages/DIG"
import DSG from "./Pages/DSG"
import FLY from "./Pages/FLY"
import LYON from "./Pages/LYON"
import SEN from "./Pages/SEN"
import SR from "./Pages/SR"
import TL from "./Pages/TL"
import FNC from "./Pages/FNC"
import G2 from "./Pages/G2"
import GX from "./Pages/GX"
import KC from "./Pages/KC"
import KCB from "./Pages/KCB"
import LR from "./Pages/LR"
import MKOI from "./Pages/MKOI"
import NAVI from "./Pages/NAVI"
import SRS from "./Pages/SRS"
import SK from "./Pages/SK"
import TH from "./Pages/TH"
import VIT from "./Pages/VIT"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/LCK" element={<LCK />} />
      <Route path="/LPL" element={<LPL />} />
      <Route path="/LCS" element={<LCS />} />
      <Route path="/LEC" element={<LEC />} />
      <Route path="/LCK_BNK_FEARX" element={<BNK_FEARX/>}/>
      <Route path="/LCK_BRO" element={<BRO/>}/>
      <Route path="/LCK_DNF" element={<DNF/>}/>
      <Route path="/LCK_DK" element={<DK/>}/>
      <Route path="/LCK_DRX" element={<DRX/>}/>
      <Route path="/LCK_GENG" element={<GENG/>}/>
      <Route path="/LCK_HLE" element={<HLE/>}/>
      <Route path="/LCK_KT" element={<KT/>}/>
      <Route path="/LCK_NS" element={<NS/>}/>
      <Route path="/LCK_T1" element={<T1/>}/>
      <Route path="/LPL_AL" element={<AL/>}/>
      <Route path="/LPL_BLG" element={<BLG/>}/>
      <Route path="/LPL_EDG" element={<EDG/>}/>
      <Route path="/LPL_IG" element={<IG/>}/>
      <Route path="/LPL_JDG" element={<JDG/>}/>
      <Route path="/LPL_LGD" element={<LGD/>}/>
      <Route path="/LPL_LNG" element={<LNG/>}/>
      <Route path="/LPL_NIP" element={<NIP/>}/>    
      <Route path="/LPL_WBG" element={<WBG/>}/>
      <Route path="/LPL_TES" element={<TES/>}/>
      <Route path="/LPL_OMG" element={<OMG/>}/>      
      <Route path="/LPL_WE" element={<WE/>}/>     
      <Route path="/LPL_TT" element={<TT/>}/>
      <Route path="/LPL_UP" element={<UP/>}/>
      <Route path="/LCS_C9" element={<C9/>}/>
      <Route path="/LCS_DIG" element={<DIG/>}/>
      <Route path="/LCS_DSG" element={<DSG/>}/>     
      <Route path="/LCS_FLY" element={<FLY/>}/>   
      <Route path="/LCS_LYON" element={<LYON/>}/>
      <Route path="/LCS_SEN" element={<SEN/>}/>
      <Route path="/LCS_SR" element={<SR/>}/> 
      <Route path="/LCS_TL" element={<TL/>}/>
      <Route path="/LEC_FNC" element={<FNC/>}/>
      <Route path="/LEC_G2" element={<G2/>}/>       
      <Route path="/LEC_GX" element={<GX/>}/>
      <Route path="/LEC_KC" element={<KC/>}/>
      <Route path="/LEC_KCB" element={<KCB/>}/>
      <Route path="/LEC_LR" element={<LR/>}/>
      <Route path="/LEC_MKOI" element={<MKOI/>}/>
      <Route path="/LEC_NAVI" element={<NAVI/>}/>
      <Route path="/LEC_SRS" element={<SRS/>}/>
      <Route path="/LEC_Sk" element={<SK/>}/>
      <Route path="/LEC_TH" element={<TH/>}/>
      <Route path="/LEC_VIT" element={<VIT/>}/>
    </Routes>
  );
}

export default App