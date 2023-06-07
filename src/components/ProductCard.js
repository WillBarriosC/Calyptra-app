import { useState, useEffect } from "react";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import ProductModal from "./ProductModal";
import product from "../helpers/db.json";

export default function ProductCard({ searchValue }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filteredList = product.list.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filteredList);
  }, [searchValue]);

  const handleCardPress = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <Grid.Container gap={2} justify="center">
      {filteredData.length > 0 ? (
        filteredData.map((item, index) => (
          <Grid xs={6} sm={3} key={index}>
            <Card
              isPressable
              onPress={() => handleCardPress(item)}
            >
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
        <ProductModal product={selectedProduct} onClose={handleModalClose} />
      )}
    </Grid.Container>
  );
}
