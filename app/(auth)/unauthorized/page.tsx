export default async function UnauthorizedPage() {
    return <>
        <h1 className="text-center md:text-5xl text-3xl font-bold md:leading-20 text-red-700">401 UNAUTHORIZED</h1>
        <h2 className="text-center md:text-2xl ">Access denied due to invalid credentials.</h2>
    </>
}