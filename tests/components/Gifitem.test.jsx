import { render,screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"


describe('pruebas con gifItem', () => {

  const title = 'Saitama';
  const url = 'https://one-punch.com/saitama.jpg'

  test('debe mostrar la imagen con el url y el ALT indicado', () => {
    
    render(<GifItem title={title} url={url}/>)

    const {src, alt} = screen.getByRole('img')

    expect(src).toBe(url)
    expect(alt).toBe(alt)

  })
  

  test('debe mostrar el titulo del componente', () => {
    render(<GifItem title={title} url={url}/>)

    expect(screen.getByText(title)).toBeTruthy();
  })
  
})
