import Form from "./components/Form";
import Horizontalbar from "./components/Horizontalbar";
import LeftBar from "./components/LeftBar";
import Normallist from "./components/Normallist";
import TitleBar from "./components/titlebar";
import Topbar from "./components/Topbar";
import "./Campaigneditpage.css";

export default function Campaigneditpage() {
    return (
        <>
            <div className="Campaigneditpage_topbar">
                <Topbar />

                <div className="Campaigneditpage_topbar2">
                    <div className="Campaigneditpage_topbar2_left">
                        <LeftBar />
                    </div>
                    <div className="Campaigneditpage_topbar2_right">
                        <div className="Campaigneditpage_topbar2_right_1">
                            <div className="Campaigneditpage_topbar2_right_1_1">
                                <TitleBar />
                            </div>
                            <div className="Campaigneditpage_topbar2_right_1_2">
                                <Form />
                            </div>
                        </div>
                        <div className="Campaigneditpage_topbar2_right_2">
                            <div className="Campaigneditpage_topbar2_right_2_left">
                                <Normallist />
                            </div>
                            <div className="Campaigneditpage_topbar2_right_2_right">
                                <Horizontalbar />
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}