
const GoPage = (props: any) => {
  return <pre>{JSON.stringify(props, null, 2)}</pre>
}

export const getServerSideProps = async (context: any) => {
  console.log('aaaa ',context.params.slug)


  return {
    props:{
      ...context.params
    }
  }
}
export default GoPage