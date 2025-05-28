import React from 'react'
import { useParams, useSearchParams } from 'react-router'

const PostIdPage = () => {

    const params = useParams()
    const [searchParams, setSearchParams] = useSearchParams();

    const onClickHandler = () => {
        setSearchParams((previous)=>{
            previous.set("name","Arron")
            return previous
        })
    }

    return (
        // <div>PostIdPage {JSON.stringify(params)}</div>
        <>
            <div>
                <h1>PostIdPage {params.id ? params.id : 0}</h1>
                <h2>{JSON.stringify(searchParams.get("name"))}</h2>
                <h3>{JSON.stringify(searchParams.get("city"))}</h3>
                <hr />
                <button
                    type="button"
                    className="btn btn-dark"
                    style={{ display: 'block', margin: 'auto', width: '200px' }}
                    onClick={onClickHandler}>Change Name</button>
            </div>
        </>
        // <div>PostIdPage {params.id}</div>
    )
}

export default PostIdPage