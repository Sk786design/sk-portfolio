"use client";

import {
  AvatarGroup,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import { useEffect, useRef, useState } from "react";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  const media = images?.[0] || "";

  /*
   * Detect all common video formats.
   * MOV is included for the POCO project.
   */
  const isVideo = /\.(mp4|webm|ogg|mov)(\?|$)/i.test(media);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  /*
   * Generate a Cloudinary thumbnail from the video.
   *
   * Example:
   *
   * video/upload/v123/file.mp4
   *
   * becomes:
   *
   * video/upload/so_0,w_1280,h_720,c_fill,q_auto,f_jpg/v123/file.jpg
   *
   * Cloudinary generates the thumbnail automatically.
   */
  const getVideoThumbnail = (url: string) => {
    if (!url) return "";

    return url
      .replace(
        "/video/upload/",
        "/video/upload/so_0,w_1280,h_720,c_fill,q_auto,f_jpg/"
      )
      .replace(/\.(mp4|webm|ogg|mov)(\?.*)?$/i, ".jpg");
  };

  const thumbnail = isVideo
    ? getVideoThumbnail(media)
    : media;

  /*
   * Load the actual video only when the card gets close
   * to the viewport.
   */
  useEffect(() => {
    if (!isVideo || !videoRef.current) return;

    const video = videoRef.current;

    if (!("IntersectionObserver" in window)) {
      setShouldLoadVideo(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "400px 0px",
        threshold: 0.01,
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [isVideo]);

  /*
   * Convert Cloudinary videos to MP4 for better browser/mobile
   * compatibility.
   */
  const videoSrc = media.replace(
    "/video/upload/",
    "/video/upload/q_auto,f_mp4/"
  );

  return (
    <Column fillWidth gap="m">
      {media &&
        (isVideo ? (
          <video
            ref={videoRef}
            controls
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
            playsInline
            muted
            preload="none"
            poster={thumbnail}
            onContextMenu={(e) => e.preventDefault()}
            style={{
              width: "100%",
              height: "auto",
              aspectRatio: "16 / 9",
              objectFit: "cover",
              borderRadius: "12px",
              background: "#000",
              display: "block",
              maxWidth: "100%",
            }}
          >
            {shouldLoadVideo && (
              <source
                src={videoSrc}
                type="video/mp4"
              />
            )}

            Your browser does not support video playback.
          </video>
        ) : (
          <img
            src={media}
            alt={title}
            draggable={false}
            loading="lazy"
            onContextMenu={(e) => e.preventDefault()}
            style={{
              width: "100%",
              height: "auto",
              aspectRatio: "16 / 9",
              objectFit: "cover",
              borderRadius: "12px",
              display: "block",
              maxWidth: "100%",
              userSelect: "none",
            }}
          />
        ))}

      <Flex
        s={{ direction: "column" }}
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        {title && (
          <Flex flex={5}>
            <Heading
              as="h2"
              wrap="balance"
              variant="heading-strong-xl"
            >
              {title}
            </Heading>
          </Flex>
        )}

        {(avatars?.length > 0 ||
          description?.trim() ||
          content?.trim()) && (
          <Column flex={7} gap="16">
            {avatars?.length > 0 && (
              <AvatarGroup
                avatars={avatars}
                size="m"
                reverse
              />
            )}

            {description?.trim() && (
              <Text
                wrap="balance"
                variant="body-default-s"
                onBackground="neutral-weak"
              >
                {description}
              </Text>
            )}

            <Flex gap="24" wrap>
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{
                    margin: "0",
                    width: "fit-content",
                  }}
                  href={href}
                >
                  <Text variant="body-default-s">
                    Read case study
                  </Text>
                </SmartLink>
              )}

              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{
                    margin: "0",
                    width: "fit-content",
                  }}
                  href={link}
                >
                  <Text variant="body-default-s">
                    View project
                  </Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};
