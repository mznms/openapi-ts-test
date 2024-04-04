import { paths } from "./openapi.d";

const endpoint = "http://localhost:3001";

const getUserList = async () => {
  const response: paths["/users"]["get"]["responses"][200]["content"]["application/json"] =
    await fetch(`${endpoint}/users`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }).then((r) => r.json());
  return response;
};

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
  const response = await fetch(`${endpoint}/users/${userId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userData),
  }).then();
  return response;
};

const main = async () => {
  // GET: ユーザの取得
  // const user = await getUser(100); // 型が string
  // console.log("取得したユーザ:", user);
  const userList = await getUserList();
  console.log("取得したユーザリスト:", userList);

  // PUT: ユーザの更新
  const updatedUserData = { name: "New User", email: "new-user@example.com" };
  await putUser(1, updatedUserData);
  // console.log("更新したユーザ:", updatedUserData);

  // ユーザの取得
  const userList2 = await getUserList();
  console.log("取得したユーザリスト:", userList2);

  return;
};

main().then();
