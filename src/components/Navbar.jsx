import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'

const Navbar = () => {
    return (
        <div>

            <Flex>
                <Box>
                    {/* brand */}
                    <h1>60815</h1>
                </Box>
                <Spacer />
                <Box>

                    <Menu>
                        <MenuButton>
                            Categorias
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Categoria A</MenuItem>
                            <MenuItem>Categoria B</MenuItem>
                            <MenuItem>Categoria C</MenuItem>

                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Box>
                    {/* Carrito */}
                    <CartWidget />
                </Box>
            </Flex>













        </div>
    )
}

export default Navbar