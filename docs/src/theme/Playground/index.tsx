
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { usePrismTheme } from "@docusaurus/theme-common";
import styles from "./styles.module.css";

export default function Playground({ children, transformCode, ...props }) {
    const prismTheme = usePrismTheme();
    const { title } = props;


    return (
        <div className={styles.playgroundContainer}>
            <LiveProvider
                code={children.trim()}
                transformCode={transformCode ?? ((code) => code.trim())}
                theme={prismTheme}
                {...props}
            >
                <LivePreview className={styles.playgroundPreview} />
                <LiveError />
                {title && <p className={styles.playgroundHeader}>{title}</p>}
                <LiveEditor className={styles.playgroundEditor} />
            </LiveProvider>
        </div>
    );
}