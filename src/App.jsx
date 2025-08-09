import { useEffect, useState } from "react"

import "./App.css"
import "./Colors.css"
import ContentCreator from "./components/ContentCreator"
import { BrowserRouter, Route, Routes } from "react-router"
import NotFound from "./pages/404"
import ShowCreators from "./pages/ShowCreators"
import ViewCreator from "./pages/ViewCreator"
import Card from "./components/Card"
import { fetchAllCreators } from "./api"
import Padding from "./components/Padding"
import Layout from "./Layout"
import EditCreator from "./pages/EditCreator"
import AddCreator from "./pages/AddCreator"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            index
            element={<ShowCreators />}
          />
          <Route
            path={`/creator/:id`}
            element={<ViewCreator />}
          />

          <Route
            path={`/creator/:id/edit`}
            element={<EditCreator />}
          />

          <Route
            path={`/new`}
            element={<AddCreator />}
          />

          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
