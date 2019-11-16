import React from 'react';

//Images
import addMapImg from '../../../assets/images/addMap.png';
import saveMapImg from '../../../assets/images/saveMap.png';
import changingImg from '../../../assets/images/changingBaseMap.png';
import detailsImg from '../../../assets/images/details.png';
import shareImg from "../../../assets/images/share.png";
import InfoImg from "../../../assets/images/Info.png";
import DetailsImg from "../../../assets/images/details.png";
import LegendsImg from "../../../assets/images/legends.png";

//Styles
import styles from "./MapBar.module.scss";

//Components
import DropDownButton from '../../../Components/DropDownButton/DropDownButton';
import IconButton from '../../../Components/IconButton/IconButton';
import ExpansiveMenu from "../../../Components/ExpansiveMenu/ExpansiveMenu";
import ImportFile from '../../../Components/ImportFile/ImportFile';

const MenuBar = props => {

    const { onClickBasicMap, onClickSaveMap, setMapName, importMap, mapName } = props;

    return (
        <div className={`${styles.mapBar} navbar navbar-expand-lg navbar-light bg-white`} >
            <div className={styles.divOptions}>
                <DropDownButton icon={detailsImg} title={"Detalhes"}>
                    <IconButton icon={InfoImg} title={"Sobre"}></IconButton>
                    <IconButton icon={DetailsImg} title={"Conteúdo"}></IconButton>
                    <IconButton icon={LegendsImg} title={"Legendas"}></IconButton>
                </DropDownButton>

                <DropDownButton icon={addMapImg} title={"Adicionar"}>
                    <a className="dropdown-item bg-white">Teste 01</a>
                </DropDownButton>

                <IconButton icon={changingImg} title={"Mudar Mapa Base"} onClick={onClickBasicMap} />
                
                <ImportFile functionImport={importMap}/>
            </div>
            <div className={styles.divOptions}>
                <input type="text" className="form-control" placeholder="Título do mapa"
                    onChange={(event) => setMapName(event.target.value)} value={mapName}/>
                <IconButton icon={saveMapImg} title={"Salvar Mapa"} onClick={onClickSaveMap} />
                <IconButton icon={shareImg} title={"Compartilhar"} />
            </div>
        </div>
    )
}

export default MenuBar;