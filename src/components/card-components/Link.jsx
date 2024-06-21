import { IconContext } from "react-icons";

const Link = ({ url, icon: Icon }) => {
    return (
        <IconContext.Provider value={{ size: 30 }}>
            <a href={url} target="_blank" className="p-2 rounded-full link-bg m-2">
                <Icon />
            </a>
        </IconContext.Provider>
    );
}
export default Link;