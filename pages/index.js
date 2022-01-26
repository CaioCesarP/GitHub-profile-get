import { useState } from "react";
import GlobalStyle from "../css/GlobalStyle";
import appConfig from "../config.json";
import Copyright from "./Copyright";
import { Box, Text, Image, Button, TextField, GridDisplay } from '@skynexui/components';

function HomePage() {

    const [profile, setProfile] = useState("github");
    var valor;

    return (
    <>
        <GlobalStyle />
        <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', 
          backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/07/this-is-fine.jpeg)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
        >
        <Box
            flex-wrap= "wrap"
            styleSheet={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', flexDirection: 'column',
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.neutrals[700],
            }}
            gridTemplateColumns='repeat(2, 1fr)'
            >

          {/* getprofile */}
            <Box
            as="form"
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px', backgroundColor: appConfig.theme.colors.neutrals[700],
            }}
          >
            <h2>🧑‍💻 GitHub Profile 🧑‍💻</h2>
            <Text 
            variant="body3" 
            styleSheet={{
              marginBottom: '45px', color: appConfig.theme.colors.neutrals[300],
            }}>
              {appConfig.name}
            </Text>

            <TextField
            fullWidth
            placeholder="Preencha com seu nome de perfil*"
            onChange={ (event) => {
              event.preventDefault();
              valor = event.target.value;
            }}
            >
            </TextField>

            <Button
            colorVariant="accent"
            label="PESQUISAR"
            onClick={(event) => {
              event.preventDefault();
              console.log(valor)
              if(valor === "" || valor === null || valor === undefined || valor.length < 3) {
                alert("Informe um perfil com mais de 2 caracteres.");
              } else {
                setProfile(valor);
              }
            }}
            styleSheet={{
              marginBottom: '9px'
            }}
            >
            </Button>
            
            </Box>
          {/* getprofile */}


          {/* profile */}
            <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
            >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`https://github.com/${profile}.png`}
            />
            <Button
              iconName="github"
              href={`https://github.com/${profile}`}
              colorVariant="accent"
              label={profile}
            >
              {profile}
            </Button>
          </Box>

          {/* profile */}

          {/* <Copyright /> */}

        </Box>
      </Box>
    </>
    );
  }

export default HomePage;  