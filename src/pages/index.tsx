
import Link from 'next/link'
import { Card, Grid } from '@nextui-org/react';

import { MainLayout } from '../../components/layouts/MainLayout'
import Image from 'next/image'



export default function HomePage() {

  return (

    <MainLayout>
     {/*  <Grid.Container gap={2} justify="center">
        <Grid xs={4}>
          <MockItem text="Huasca de ocampo pueblo magico" />
        </Grid>
        <Grid xs={4}>
          <MockItem text="2 of 3" />
        </Grid>
              <Grid xs={4}>
          <MockItem text="3 of 3" />
        </Grid> 
      </Grid.Container> */}
      <h1>Próximamente</h1>
    </MainLayout>
  )
}
const MockItem = ({ text }: any) => {
  return (
    <Card css={{ h: "$50", $$cardColor: '$colors$primary' }}>
      <Card.Body>
        <Link href={"https://www.google.com.mx/"}

        >
          {<Image
            src="/OIP.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />}
        </Link>

        <Link href={"https://www.google.com.mx/"}

        >
          {text}
        </Link>
      </Card.Body>
    </Card>
  );
};