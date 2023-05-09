import React from 'react'
import { awrapper2 } from '../../database'


const AWrapper = () => {
    return (
        <>
            <section className='awrapper'>
                <div className="container grid">
                    {awrapper2.map((val) => (
                        <div className="box flex">
                            <div className='img'>
                                <img src="{val.cover}" alt="" />
                            </div>
                            <div className="text">
                                <h1>{val.data}</h1>
                                <h3>{val.title}</h3>
                            </div>
                        </div>
                    )

                    )}
                </div>
            </section>
        </>
    )
}

export default AWrapper
