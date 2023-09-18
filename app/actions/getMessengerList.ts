const accessToken: string =
  "EAANmVDP5Db8BOZCw9xgwz3IoeJimPRBCGBjnYhuoT38GOpolx8nCIxzZCPBDPRmLym0Va9JZBMtvg9xNEQOzlBSyjeKh8wWjIVahkopmWKTFXV3WUaLEHOMXcYjVKbPx5ZAJhZB9jvEgogWaoPVUUN3DzE9FDsv4F31MZCOthUxYiVYfhCR9ToZAZAj2QuLZBYLkrw8lmXP5xOfhu7sLj";
const pageId: string = "115347698334225";
const apiVersion: string = "v17.0";

const getMessengerList = async () => {
  try {
    const response = await fetch(
      `https://graph.facebook.com/${apiVersion}/${pageId}/conversations?fields=participants&platform=messenger&access_token=${accessToken}`
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log("ERROR", error);
  }
};

export default getMessengerList;
