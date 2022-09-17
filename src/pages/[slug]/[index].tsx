
const GoPage = (props) => {
  return <pre>{JSON.stringify(props, null, 2)}</pre>
}

export const getServerSideProps = async (context) => {
  console.log('aaaa ',context.params.slug)


  return {
    props:{
      ...context.params
    }
  }
}
export default GoPage