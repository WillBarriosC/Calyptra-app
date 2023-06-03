import { useState } from "react";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import ProductModal from "./ProductModal";
import product from "../helpers/db.json";

export default function ProductCard({ searchValue }) {
  const [modalVisible, setModalVisible] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredList = product.list.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleCardPress = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  return (
    <Grid.Container gap={2} justify="flex-start">
      {filteredList !== null && filteredList.length > 0 ? (
        filteredList.map((item, index) => (
          <Grid xs={6} sm={3} key={index}>
            <Card isPressable onPress={() => handleCardPress(item)}>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={"https://nextui.org" + item.img}
                  objectFit="cover"
                  width="100%"
                  height={280}
                  alt={item.title}
                />
              </Card.Body>
              <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text b>{item.title}</Text>
                  <Text
                    css={{
                      color: "$accents7",
                      fontWeight: "$semibold",
                      fontSize: "$sm",
                    }}
                  >
                    {item.price}
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))
      ) : (
        <Grid.Container justify="center">
          <Text>No items to show...</Text>
        </Grid.Container>
      )}

      {modalVisible && selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setModalVisible(false)}
        />
      )}
    </Grid.Container>
  );
}
