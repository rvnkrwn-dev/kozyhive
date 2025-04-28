"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_1 = require("~/server/config/prisma");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var user, owner, address, kost, photo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma_1.prisma.user.create({
                        data: {
                            username: 'john_doe',
                            full_name: 'John Doe',
                            email: 'john@example.com',
                            password: 'password123',
                            role: 'USER',
                            user_status: 'ACTIVE',
                        },
                    })];
                case 1:
                    user = _a.sent();
                    return [4 /*yield*/, prisma_1.prisma.user.create({
                            data: {
                                username: 'owner123',
                                full_name: 'Owner One',
                                email: 'owner@example.com',
                                password: 'ownerpass',
                                role: 'OWNER',
                                user_status: 'ACTIVE',
                            },
                        })];
                case 2:
                    owner = _a.sent();
                    return [4 /*yield*/, prisma_1.prisma.address.create({
                            data: {
                                street_name: 'Main Street',
                                street_number: '123',
                                village_name: 'Downtown',
                                city: 'New York',
                                state: 'NY',
                                zip: '10001',
                                longitude: '40.7128',
                                latitude: '-74.0060',
                                kost_id: 1
                            },
                        })];
                case 3:
                    address = _a.sent();
                    return [4 /*yield*/, prisma_1.prisma.kost.create({
                            data: {
                                slug: 'cozy-home',
                                title: 'Cozy Home',
                                price: 1000.50,
                                type: 'CAMPUR',
                                ratings: 4.5,
                                address: {
                                    connect: { id: address.id }, // Connect to the existing address
                                },
                                owner: {
                                    connect: { id: owner.id }, // Connect to the existing owner
                                },
                                facilitiesRoom: {
                                    create: {
                                        ac: true,
                                        meja: true,
                                        lemari: true,
                                        kursi: true,
                                        wifi: true,
                                    },
                                },
                                facilitiesToilet: {
                                    create: {
                                        kamar_mandi: 'DALAM',
                                        shower: true,
                                        kloset: 'DUDUK',
                                        air_panas: false,
                                    },
                                },
                            }, // Explicitly cast to Prisma.KostCreateInput
                        })];
                case 4:
                    kost = _a.sent();
                    // Create a wishlist entry
                    return [4 /*yield*/, prisma_1.prisma.wishlist.create({
                            data: {
                                user: {
                                    connect: { id: user.id },
                                },
                                kost: {
                                    connect: { id: kost.id },
                                },
                            },
                        })];
                case 5:
                    // Create a wishlist entry
                    _a.sent();
                    return [4 /*yield*/, prisma_1.prisma.photo.create({
                            data: {
                                image_url: 'https://example.com/photo1.jpg',
                                description: 'Front view of the kost',
                                kost: {
                                    connect: { id: kost.id },
                                },
                            },
                        })];
                case 6:
                    photo = _a.sent();
                    // Create a review
                    return [4 /*yield*/, prisma_1.prisma.ulasan.create({
                            data: {
                                user: {
                                    connect: { id: user.id },
                                },
                                rate: 5,
                                comments: 'Great place!',
                                photos: {
                                    connect: { id: photo.id },
                                },
                            },
                        })];
                case 7:
                    // Create a review
                    _a.sent();
                    // Create a log entry
                    return [4 /*yield*/, prisma_1.prisma.log.create({
                            data: {
                                user: {
                                    connect: { id: user.id },
                                },
                                action: 'Masuk',
                                description: 'User logged in',
                            },
                        })];
                case 8:
                    // Create a log entry
                    _a.sent();
                    // Create a refresh token
                    return [4 /*yield*/, prisma_1.prisma.refreshToken.create({
                            data: {
                                user: {
                                    connect: { id: user.id },
                                },
                                refresh_token: 'random_refresh_token_here',
                            },
                        })];
                case 9:
                    // Create a refresh token
                    _a.sent();
                    console.log('Database seeded successfully');
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error('Error seeding database:', e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma_1.prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
