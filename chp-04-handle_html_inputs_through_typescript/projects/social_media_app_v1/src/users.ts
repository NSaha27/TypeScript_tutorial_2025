let users: Array<any> = [];

class User {
  constructor(
    public username: string,
    public fullName: string,
    public sex: string,
    public phone: string,
    public email: string,
    public password: string,
  ) {
    this.username = username;
    this.fullName = fullName;
    this.sex = sex;
    this.phone = phone;
    this.email = email;
    this.password = password;
  }

  saveUser() {
    const curUsers = users ? [...users] : [];
    curUsers.push({
      username: this.username,
      fullName: this.fullName,
      sex: this.sex,
      phone: this.phone,
      email: this.email,
      password: this.password,
    });
    try {
      users = curUsers;
      return true;
    } catch (err: any) {
      console.error("***registration was failed, error:", err.message);
      return false;
    }
  }

  static findUser(username: string) {
    if (!users) {
      console.error("***no user was found!");
      return false;
    }
    const userFound = users.find((user) => user.username === username);
    if (!userFound) {
      console.error("***invalid username or password!");
      return false;
    }
    return userFound;
  }
}

export default User;
