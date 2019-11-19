import React, { useState, useEffect } from 'react'
import cartoon from '../assets/img/cartoon.jpg'
import headImg from '../assets/img/coin-h.jpg'
import tailImg from '../assets/img/coin-t.jpg'
import { Modal, Button } from 'react-bootstrap'

const Home = () => {

    const [coinState, setCoinState] = useState({
        coin: '',
        count: 0,
        score: 0
    })

    useEffect(() => {
        if (coinState.score === 5) {
            setModalState(true)
        }
    }, [coinState.score])

    const [userInput, setUserInput] = useState({
        coin: ''
    })

    const [modalState, setModalState] = useState(false)
    const handleClose = () => {
        setModalState(false)
        setCoinState({
            coin: '',
            count: 0,
            score: 0
        })
    }
    const handleShow = () => setModalState(true)

    const randomCoin = (userSelected) => {
        let number = Math.random()
        let randomResult = ''
        if (number > 0.5) {
            randomResult = 'head'
            setCoinState({
                coin: 'head',
                count: coinState.count,
                score: coinState.score
            })
        } else {
            randomResult = 'tail'
            setCoinState({
                coin: 'tail',
                count: coinState.count,
                score: coinState.score
            })
        }
        checkResult(userSelected, randomResult)
    }

    const checkResult = (userSelected, randomResult) => {
        if (userSelected === randomResult && userSelected !== null && randomResult !== null) {
            setCoinState({
                coin: randomResult,
                count: coinState.count + 1,
                score: coinState.score + 1
            })
        } else if (userSelected !== randomResult && userSelected !== null && randomResult !== null) {
            setCoinState({
                coin: randomResult,
                count: coinState.count + 1,
                score: coinState.score
            })
        }
    }

    const headClicked = () => {
        setUserInput({ coin: 'head' })
        randomCoin('head')
    }
    const tailClicked = () => {
        setUserInput({ coin: 'tail' })
        randomCoin('tail')
    }

    const btnClass = "col-8 col-md-2 mt-2 mt-md-0 mx-md-1 btn-lg btn-primary"

    return (
        <section className="container text-center mt-5">
            <h2>แน่จริงก็ทายให้ถูก 5 ครั้ง</h2>
            <div>
                {coinState.coin === '' && <div style={{backgroundImage: `url(${cartoon})`, height: 200, size: 'contain', width: '100%', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}></div>}
                {coinState.coin === 'head' && <div style={{backgroundImage: `url(${headImg})`, height: 200, size: 'contain', width: '100%', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}></div>}
                {coinState.coin === 'tail' && <div style={{backgroundImage: `url(${tailImg})`, height: 200, size: 'contain', width: '100%', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}></div>}
            </div>
            <h2 className="mt-4">เหรียญออก  : {coinState.coin === 'head' ? 'หัว' : coinState.coin === 'tail' ? 'ก้อย' : '-'}</h2>
            <h3>คะแนนของคุณ : {coinState.score}</h3>
            <h4 className='text-muted'>จำนวนครั้งที่เล่น : {coinState.count}</h4>
            <div className="mb-5 row justify-content-center">
                <button
                    className={btnClass}
                    onClick={headClicked}
                >
                    หัว
                </button>
                <button
                    className={btnClass}
                    onClick={tailClicked}
                >
                    ก้อย
                </button>
            </div>
            <Modal show={modalState} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>สำเร็จแล้วว!!</Modal.Title>
                </Modal.Header>
                <Modal.Body>คุณเล่นไปทั้งหมด { coinState.count } ครั้ง!</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        ปิด
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    )
}

export default Home