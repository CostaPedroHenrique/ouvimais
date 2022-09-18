const TenantHome = (props: any) => {
  return <h1>{props.slug}</h1>
}

export const getServerSideProps = async (context: any) => {

  return {
    props:{
      ...context.params
    }
  }
}

export default TenantHome