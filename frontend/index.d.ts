declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBILC_API_SERVER: string;
    }
  }
}
