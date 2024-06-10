export const getLinkToDocument = (documentName: string, currentLanguage: string ) => {
    return `/docs/${currentLanguage}/${documentName}.pdf`
}
