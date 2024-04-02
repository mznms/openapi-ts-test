import { paths } from "./openapi.d";

const endpoint = "http://localhost:3001";

const getUser = async (userId: number) => {
  const response: paths["/users/{userId}"]["get"]["responses"][200]["content"]["application/json"] =
    await fetch(`${endpoint}/users/${userId}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }).then((r) => r.json());
  return response;
};

const main = async () => {
  const user = await getUser(100); // 型が string
  return user;
};

main().then((text) => console.log(text));
