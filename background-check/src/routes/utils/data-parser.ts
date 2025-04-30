export default function prepareData(rawData: any) {
    return {
        firstName: rawData.firstName || "",
        lastName: rawData.lastName || "",
        email: rawData.email || "",
        keywords: rawData.keywords.split(",").map((e: string) => e.trim()) || [],
    };
};