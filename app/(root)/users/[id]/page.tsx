interface PageProps {
    params: Promise<{ id: number }>;
}

export default async function UserRoute(props: PageProps) {

    const { id } = await props.params;

    return (
        <section>
            <h1>USER ID {id} DASHBOAD</h1>
        </section>
    );
}
