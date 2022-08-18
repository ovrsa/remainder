import { useRouter } from 'next/router';

const signUp = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   console.log(email, password);

//   // 登録ボタンを押すとhandleSubmitをが発火する
//   // handleSubmitの中ではsubmitイベントのデフォルトの動作を停止している
//   // preventDefaultがない場合、登録ボタンをクリックするとリロードされる
//   const handleSubmit = (event: any) => {
//     event.preventDefault();
//     const { email, password } = event.target.elements;
//     // ↓v9の場合の書き方
//     createUserWithEmailAndPassword(auth, email.value, password.value)
//     // ↓.thenはawaitと同じ
//     .then(( userCredential) => {
//       console.log('user created');
//       console.log(userCredential);

//     })
//     // errorが出た場合はcatchの処理を実装
//     .catch((error) => {
//       alert(error.message)
//       console.error(error)
//     }); 
//     console.log(email.value);
//   };
//   // Eメールを送信した際、setEmailの値が変更される
//   const handleChangeEmail = (event: any) => {
//     setEmail(event.currentTarget.value);
//   };
//   // パスワードを送信した際、setPasswordの値が変更される
//   const handleChangePassword = (event: any) => {
//     setPassword(event.currentTarget.value);
//   };

  return (
    <div>
      <h1>ユーザ登録</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            // 値が変更された際に発火、handleChangeEmailの値が変わる
            onChange={(event) => handleChangeEmail(event)}
            autoFocus={true}
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
            placeholder="password"
            // 値が変更された際に発火、handleChangePasswordの値が変わる
            onChange={(event) => handleChangePassword(event)}
          />
        </div>
        <div>
          <button>登録</button>
        </div>
      </form>
        <div>
          <Link  href="signin"><button>ユーザーログイン</button>
          </Link>
        </div>
    </div>
    );
};

export default signUp
