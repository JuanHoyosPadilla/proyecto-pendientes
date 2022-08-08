import {Navegacion} from './navegacion/Navegacion'
export function Layout({children}) {
    return <>
        <div>
            <Navegacion/>
        </div>
        <main>
            {children}
        </main>
    </>
}