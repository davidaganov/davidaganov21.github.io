import { PDFViewer } from "@react-pdf/renderer"
import { Resume } from "../Resume/Resume"
import styles from "./Document.module.sass"

export const Document = (): JSX.Element => {
  return (
    <section
      className={styles.links}
      id="links"
    >
      <div className="inner">
        {/* <PDFDownloadLink
          document={<Resume />}
          fileName="resume.pdf"
        >
          {({ loading }) => (loading ? "Loading document..." : "Done")}
        </PDFDownloadLink> */}

        <div className={styles.pdf}>
          <PDFViewer>
            <Resume />
          </PDFViewer>
        </div>
      </div>
    </section>
  )
}
