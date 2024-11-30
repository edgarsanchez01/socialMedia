-- CreateTable
CREATE TABLE `Account` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `providerAccountId` VARCHAR(191) NOT NULL,
    `refresh_token` TEXT NULL,
    `access_token` TEXT NULL,
    `expires_at` INTEGER NULL,
    `token_type` VARCHAR(191) NULL,
    `scope` VARCHAR(191) NULL,
    `id_token` TEXT NULL,
    `session_state` VARCHAR(191) NULL,

    UNIQUE INDEX `Account_provider_providerAccountId_key`(`provider`, `providerAccountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Session` (
    `id` VARCHAR(191) NOT NULL,
    `sessionToken` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Session_sessionToken_key`(`sessionToken`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `username` CHAR(16) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `emailVerified` DATETIME(3) NULL,
    `image` VARCHAR(255) NOT NULL DEFAULT 'https://res.cloudinary.com/dwa8at7sx/image/upload/defaultavatar_ve03ed.png',
    `joinedOn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `authorVerified` BOOLEAN NOT NULL DEFAULT false,
    `role` ENUM('USER', 'DEVELOPER') NOT NULL DEFAULT 'USER',
    `settingsId` VARCHAR(191) NOT NULL,
    `url` TEXT NULL,
    `banner` VARCHAR(255) NOT NULL DEFAULT 'https://res.cloudinary.com/dwa8at7sx/image/upload/v1677930500/defaultbanner_hjtdni.png',
    `bio` TEXT NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BookmarkedByAuthor` (
    `postId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`postId`, `userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LikedByAuthor` (
    `postId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`postId`, `userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Post` (
    `id` VARCHAR(191) NOT NULL,
    `text` VARCHAR(255) NOT NULL,
    `image` VARCHAR(255) NULL,
    `createdOn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `authorId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Hashtag` (
    `id` VARCHAR(191) NOT NULL,
    `text` VARCHAR(255) NOT NULL DEFAULT 'hashtag',
    `subtext` VARCHAR(255) NOT NULL DEFAULT '',
    `createdOn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Hashtag_text_key`(`text`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HashtagOnPost` (
    `createdOn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `postId` VARCHAR(191) NOT NULL,
    `hashtagId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`hashtagId`, `postId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comment` (
    `id` VARCHAR(191) NOT NULL,
    `commentText` VARCHAR(255) NOT NULL DEFAULT '',
    `createdOn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` VARCHAR(191) NOT NULL,
    `postId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CommentLikedByAuthor` (
    `commentId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`commentId`, `userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Settings` (
    `id` VARCHAR(191) NOT NULL,
    `officialNews` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Follows` (
    `followerId` VARCHAR(191) NOT NULL,
    `followingId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`followerId`, `followingId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Notification` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `iconImage` VARCHAR(255) NOT NULL DEFAULT '/favicon.ico',
    `text` VARCHAR(255) NOT NULL DEFAULT '',
    `url` VARCHAR(255) NOT NULL DEFAULT '/',
    `seen` BOOLEAN NOT NULL DEFAULT false,
    `createdOn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Agregar llave foranea 
ALTER TABLE `Account` ADD CONSTRAINT `Account_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- Agregar llave foranea 
ALTER TABLE `Session` ADD CONSTRAINT `Session_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- Agregar llave foranea 
ALTER TABLE `User` ADD CONSTRAINT `User_settingsId_fkey` FOREIGN KEY (`settingsId`) REFERENCES `Settings`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- Agregar llave foranea 
ALTER TABLE `BookmarkedByAuthor` ADD CONSTRAINT `BookmarkedByAuthor_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- Agregar llave foranea 
ALTER TABLE `BookmarkedByAuthor` ADD CONSTRAINT `BookmarkedByAuthor_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- Agregar llave foranea 
ALTER TABLE `LikedByAuthor` ADD CONSTRAINT `LikedByAuthor_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- Agregar llave foranea 
ALTER TABLE `LikedByAuthor` ADD CONSTRAINT `LikedByAuthor_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- Agregar llave foranea 
ALTER TABLE `Post` ADD CONSTRAINT `Post_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- Agregar llave foranea 
ALTER TABLE `HashtagOnPost` ADD CONSTRAINT `HashtagOnPost_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- Agregar llave foranea 
ALTER TABLE `HashtagOnPost` ADD CONSTRAINT `HashtagOnPost_hashtagId_fkey` FOREIGN KEY (`hashtagId`) REFERENCES `Hashtag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- Agregar llave foranea 
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- Agregar llave foranea 
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- Agregar llave foranea 
ALTER TABLE `CommentLikedByAuthor` ADD CONSTRAINT `CommentLikedByAuthor_commentId_fkey` FOREIGN KEY (`commentId`) REFERENCES `Comment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- Agregar llave foranea 
ALTER TABLE `CommentLikedByAuthor` ADD CONSTRAINT `CommentLikedByAuthor_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- Agregar llave foranea 
ALTER TABLE `Follows` ADD CONSTRAINT `Follows_followerId_fkey` FOREIGN KEY (`followerId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- Agregar llave foranea 
ALTER TABLE `Follows` ADD CONSTRAINT `Follows_followingId_fkey` FOREIGN KEY (`followingId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- Agregar llave foranea 
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
