import { Route, Routes } from "react-router-dom";
import { Event } from "./components/pages/Event";
import { Subscribe } from "./components/pages/Subscribe"

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Subscribe/>}/>
            <Route path="/event" element={<Event/>}/>
            <Route path="/event/lesson/:slug" element={<Event/>}/>
        </Routes>
    )
}