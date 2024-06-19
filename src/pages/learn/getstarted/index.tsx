import MainLayout from '@/components/MainLayout'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import React from 'react'

const GetStarted = () => {
    return (
        <div className="container px-14">
            <div className="p-grid">
                <div className="p-col-12 p-md-4 mt-3">
                    <Card title="Katakana" className="p-mr-2 p-mb-2" style={{ width: '100%' }}>
                        <p>Learn the Katakana writing system used in Japanese.</p>
                        <Button label="Get Started" text className="p-button-secondary" onClick={() => window.open('/learn/katakana', '_blank')} />
                    </Card>
                </div>
                <div className="p-col-12 p-md-4 mt-3">
                    <Card title="Hiragana" className="p-mr-2 p-mb-2" style={{ width: '100%' }}>
                        <p>Learn the Hiragana writing system used in Japanese.</p>
                        <Button label="Get Started" text className="p-button-secondary" onClick={() => window.open('/learn/hiragana', '_blank')} />
                    </Card>
                </div>
                <div className="p-col-12 p-md-4 mt-3">
                    <Card title="Kanji" className="p-mr-2 p-mb-2" style={{ width: '100%' }}>
                        <p>Learn the Kanji characters used in Japanese writing.</p>
                        <Button label="Get Started" text className="p-button-secondary" onClick={() => window.open('/learn/kanji', '_blank')} />
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default GetStarted
