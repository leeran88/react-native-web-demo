import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Button, ThemeProvider} from 'nachos-ui';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Demo.styles';
import {getRandomColor} from './Helpers';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.addItem = this.addItem.bind(this);
        this.renderItem = this.renderItem.bind(this);

        this.state = {
            items: []
        }
    }

    addItem() {
        const items = this.state.items;
        items.push({color1: getRandomColor(), color2: getRandomColor(), color3: getRandomColor()});

        this.setState({items: items});
    }

    renderItem(item, number) {
        return (
            <View key={number} style={[styles.item]}>
                <LinearGradient
                    colors={[item.color1, item.color2, item.color3]}
                    start={{x: 0.0, y: 0.0}}
                    end={{x: 1.0, y: 0.0}}
                    style={styles.linearGradient}>
                    <Text>Item number {number}</Text>
                </LinearGradient>

            </View>
        )
    }

    render() {
        return (
            <ThemeProvider>
                <ScrollView>
                    <View style={styles.container}>
                        <Button onPress={this.addItem}>Add Item</Button>
                        <View style={styles.list}>
                            {this.state.items.map((item, i) => this.renderItem(item, i + 1))}
                        </View>
                    </View>
                </ScrollView>
            </ThemeProvider>
        )
    }
}