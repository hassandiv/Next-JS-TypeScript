import React, { FC } from 'react'
import styles from '../../styles/Home.module.css'

type Comment = {
    definedProps: {
        id?: number
        postId: number
        name: string
        email: string
        body: string
    }
}

const ItemCard: FC<Comment> = ({ definedProps }) => {

    const { postId, name, email, body } = definedProps

    return (
        <li className={styles.list}>
            <p>{name}</p>
            <p>{postId}</p>
            <p>{email}</p>
            <p>{body}</p>
        </li>
    )
}
export default ItemCard 