export async function fetchUsersApi() {
  const res = await fetch('https://randomuser.me/api/?results=3&inc=name,gender,email,nat,picture&noinfo')
  return res.json() as Promise<Pagination<UserInfo>>
}