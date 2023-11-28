import { Links, LinkItem} from "./styles.js"

export function Menu(){
    return(
        <Links>

            <LinkItem target="_black" href="#">
                Destinos
            </LinkItem>

            <LinkItem target="_black" href="#">
                Ofertas
            </LinkItem>

            <LinkItem href="mailto:brunobandeirafernandes@gmail.com">
                Contato
            </LinkItem>

        </Links>
    )
}