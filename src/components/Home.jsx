import React from 'react'
import{Box,Image,Heading,Container,Stack,Text} from '@chakra-ui/react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'
function Home() {
  return (
    <Box>
        <MyCarousel />
    </Box> )
}
const MyCarousel=()=>{
    let headingOptions={
        pos:"absolute",
        top:"50%",
        left:"50%",
        transform:'translate(-50%,-50%)',
        p:'4',
        textTransform:'uppercase',
    }
    return(
        <>
        <Carousel infiniteLoop autoPlay interval={1000} showStatus={false} showArrows={false} showThumbs={false}  >
        <Box w={'full'} h={'100vh'}>
            <Image src={img1}/>
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Watch The Future</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img2}/>
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>Future is gaming</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img3}/>
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Watch The Future</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img4}/>
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Watch The Future</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img5}/>
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Watch The Future</Heading>
        </Box>
        </Carousel>
        <Container minH={'100vh'} maxW={"container.xl"} p="16">
            <Heading 
            textTransform={'uppercase'}
            w='fit-content'
            borderBottom={'2px solid'}
            m='auto'
            >
                Services
            </Heading>
            <Stack direction={['column','row']}
            mt={'20px'}
            alignItems={['center','normal']}
            >
                <Image src={img5} 
                h={['100px','400px']}
                w={['100px','400px']}
                filter={'hue-rotate(130deg)'}
                mt={'10%'}
                />
            <Text  
             letterSpacing={'widest'}
             lineHeight={'190%'}
             p={['4', '16']}
             textAlign={'center'}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, minus.
                Consequatur, id sequi odio aut architecto distinctio sed fuga! Eveniet?
                Nesciunt illum enim excepturi recusandae architecto eum ab, provident debitis!
                Molestiae at corrupti consequatur! Unde nemo fugit vitae in doloribus.
                Fuga unde quo voluptatum voluptate iusto, molestias distinctio doloremque vel.
                Autem temporibus laboriosam vitae expedita maxime ad iusto animi nihil!
                Quo, ipsum sequi ex perferendis rerum consequatur reprehenderit dolores praesentium.
                Sint saepe cumque laborum sed repudiandae deserunt necessitatibus! Officiis, reiciendis!
                At voluptates ullam veritatis iusto recusandae reiciendis incidunt totam repellendus!
                Est tempora aut ut, accusantium minus molestiae vel facere quis.
                Voluptates, nostrum? Explicabo unde iusto voluptatem officiis dolorum? Nemo, voluptatum.
                Recusandae quo nam fugit at officiis architecto itaque rem quibusdam?
                Ullam maxime libero eum deserunt autem id aut voluptatum veniam!
                Beatae in eligendi at delectus assumenda itaque aut aliquam ab.
                Tenetur amet obcaecati eius voluptas, qui itaque maxime magni iusto!
                Culpa, nam maiores magnam animi numquam sapiente nemo tempora sequi?
                Minus ipsa eos sit necessitatibus iste possimus, fugit assumenda quam.
                </Text> 
            </Stack>
        </Container>
        </>
        )}

export default Home