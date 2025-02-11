const { assert, expect } = require("chai");

const inviteHashes = [
  "0x10973f7ad3449d0b3fcfabb6f32faa69d223e5e17e070333f3ece454e1f591e4",
  "0x05c7d8504872c602ddc6279aca1413d1c0eedf4b481cdd216735f192d3e099d4",
  "0x18386636a523252f3f3436d1e3aa95b9b54b76bf73a209b35d42678c9b997e69",
  "0xdc3e7b96329eab6d109b9a594ea7b39d0d77d186a82c80a55712ce8f82a2b0d3"
]

const blessingHashes = [
  "0x4ade90df14d7175ef861b4cb17dad1109b621e0eb358deb879e57074b6c8103f",
  "0x104ef588493246641b0642235a9ea670638ccb128b8f9d6ea4d8f9b657b06718",
  "0x460fda197eb5fbf0a9762c23969e3561d27920ee4146e282eaa60efa5af90824",
  "0xf2f806ccadb2b354a947ccfce86d000d46a61959058f6ca06fd63c77490b41e3"
]

describe("Writing signatures (Part 1)", function() {

  describe("Public Test 1", function () {

    it("Should sign invites", async function () {

      let inviteSignatures;
      try {
        inviteSignatures = require("../output/invites.json");
      } catch {
        assert(false, "Failed to open output/invites.json");
      }

      for (let i = 0; i < inviteHashes.length; i++) {
        expect(ethers.utils.keccak256(inviteSignatures[i]))
          .to.equal(inviteHashes[i]); 
      }

    });

  });

  describe("Public Test 2", function () {

    it("Should sign blessings", async function () {

      let blessingSignatures;
      try {
        blessingSignatures = require("../output/blessings.json");
      } catch {
        assert(false, "Failed to open output/blessings.json");
      }

      expect(blessingHashes.length).to.equal(blessingSignatures.length);

      for (let i = 0; i < blessingHashes.length; i++) {
        expect(ethers.utils.keccak256(blessingSignatures[i]))
          .to.equal(blessingHashes[i]); 
      }

    });

  });
});