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

const putUser = async (
  userId: number,
  userData: { name: string; email: string }
) => {
  const response: paths["/users/{userId}"]["put"]["responses"][200]["content"]["application/json"] =
    await fetch(`${endpoint}/users/${userId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    }).then((r) => r.json());
  return response;
};

const main = async () => {
  // ユーザの取得
  const user = await getUser(100); // 型が string
  console.log("取得したユーザ:", user);

  // ユーザの更新
  const updatedUserData = { name: "新しい名前", email: "new-user@example.com" };
  const updatedUser = await putUser(101, updatedUserData);
  console.log("更新したユーザ:", updatedUser);

  // ユーザの取得
  const newUser = await getUser(100); // 型が string
  console.log("取得したユーザ:", newUser);

  return { user, updatedUser };
};

main().then((result) => console.log(result));
