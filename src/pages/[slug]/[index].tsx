
const GoPage = (props: any) => {
  return <pre>{JSON.stringify(props, null, 2)}</pre>
}

export const getServerSideProps = async (context: any) => {

  return {
    props:{
      ...context.params
    }
  }
}
export default GoPage