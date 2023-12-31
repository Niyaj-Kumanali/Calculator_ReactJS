import React, { Component } from "react";

export default function KeyPadComponent(props) {
    return (
        <div className="button">
            <button name="(" onClick={(e) => props.onClick(e.target.name)}>
                (
            </button>
            <button name=")" onClick={(e) => props.onClick(e.target.name)}>
                )
            </button>
            <button name="CE" onClick={(e) => props.onClick(e.target.name)}>
                CE
            </button>

            <button name="C" onClick={(e) => props.onClick(e.target.name)}>
                AC
            </button>

            <button className="numbers" name="7" onClick={(e) => props.onClick(e.target.name)}>
                7
            </button>
            <button className="numbers" name="8" onClick={(e) => props.onClick(e.target.name)}>
                8
            </button>
            <button className="numbers" name="9" onClick={(e) => props.onClick(e.target.name)}>
                9
            </button>
            <button name="/" onClick={(e) => props.onClick(e.target.name)}>
                ÷
            </button>

            <button className="numbers" name="4" onClick={(e) => props.onClick(e.target.name)}>
                4
            </button>
            <button className="numbers" name="5" onClick={(e) => props.onClick(e.target.name)}>
                5
            </button>
            <button className="numbers" name="6" onClick={(e) => props.onClick(e.target.name)}>
                6
            </button>
            <button name="*" onClick={(e) => props.onClick(e.target.name)}>
                x
            </button>

            <button className="numbers" name="1" onClick={(e) => props.onClick(e.target.name)}>
                1
            </button>
            <button className="numbers" name="2" onClick={(e) => props.onClick(e.target.name)}>
                2
            </button>
            <button className="numbers" name="3" onClick={(e) => props.onClick(e.target.name)}>
                3
            </button>
            <button name="-" onClick={(e) => props.onClick(e.target.name)}>
                -
            </button>
            
            <button className="numbers" name="0" onClick={(e) => props.onClick(e.target.name)}>
                0
            </button>
            <button name="." onClick={(e) => props.onClick(e.target.name)}>
                .
            </button>
            <button className="equal" name="=" onClick={(e) => props.onClick(e.target.name)}>
                =
            </button>
            <button name="+" onClick={(e) => props.onClick(e.target.name)}>
                +
            </button>
            
        </div>
    );
}
