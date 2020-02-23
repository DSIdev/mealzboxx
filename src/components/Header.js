import React from 'react';
import { PageHeader, Affix } from 'antd';
import { appColors, appConstants } from "../config"
import AvatarIcon from "./HeaderUserAvatar"
const styles = {
    header: {
        backgroundColor: appColors.primary,
        color: appColors.lightFont,
        borderBottom: '1px solid rgb(235, 237, 240)',
        height: "50px"
    },
    avatar: {
        color: "#FFFFFF",
        backgroundColor: "#AED581"
    }
}
function Header() {
    return (
        <Affix>
            <PageHeader style={styles.header} title={appConstants.appDisplayName} subTitle={<AvatarIcon />} />
        </Affix>)
}

export default Header;
