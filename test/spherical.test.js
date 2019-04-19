const Spherical = require("../src/spherical.js");
const expect = require("chai").expect;
const assert = require("chai").assert;

describe("Spherical Initial Test", () => {
    beforeEach(() => {
        sphere = new Spherical();
    });
    it("constructor builds the object", () => {
        assert(new Spherical() || undefined);
    });
    it("spherical should have jump as a function", () => {
        // sphere = new Spherical();
        assert(sphere.jump || undefined);
    })
    it("jump should always return true", () => {
        // sphere = new Spherical();
        expect(sphere.jump()).to.be.equal(true);
    });
    describe("moveForward Suite", () => {
        it("spherical should have moveForward as a function", () => {
            assert(sphere.moveForward || undefined);
        });
        it("moveForward should update position and return it", () => {
            expect(sphere.moveForward(1)).to.be.equal(1);
            expect(sphere.moveForward(1)).to.be.equal(2);
            expect(sphere.moveForward(1.5)).to.be.equal(3.5);
        });
        
        it("moveForward should ignore negative values", () => {
            expect(sphere.moveForward(-1)).to.be.equal(0);
        });
    });
});