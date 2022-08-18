import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router';
import Link from 'next/link';

import React from 'react'

const signin = () => {
  // const handleSubmit = (event: any) => {
  //   event.preventDefault();
    
  //   const { email, password } = event.target.elements;
  //   signInWithEmailAndPassword(auth, email.value, password.value)
  //     .then((user) => {
  //       console.log('ログイン成功=', user.user.uid)
  //       // const router = useRouter();
  //       // router.push("/");
  //     })
  //     .catch((error) => {
  //       console.error(error)
  //       alert(error.message)
  //     })    
  // };

  return (
    <div>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input name="email" type="email" placeholder="email" />
        </div>
        <div>
          <label>パスワード</label>
          <input name="password" type="password" placeholder="password" />
        </div>
        
        <div>
          <button>ログイン</button>
        </div>
        
        <div>
          <Link  href="/signup"><button>新規登録</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default signin

