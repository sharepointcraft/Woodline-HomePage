import * as React from 'react';
import styles from '../HomePage.module.scss';
import { IVideoLibraryProps } from './IVideoLibraryProps';
import { IVideoItem } from '../../types';
import { DEFAULT_VIDEOS } from '../../services';

export const VideoLibrary: React.FC<IVideoLibraryProps> = ({
  title = 'L&D Video Library',
  videos = DEFAULT_VIDEOS,
  onVideoSelect,
  viewAllUrl = '#'
}) => {
  return (
    <div className={styles.contentCard}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '8px'
        }}
      >
        <h2 className={styles.sectionTitle} style={{ margin: 0 }}>
          {title}
        </h2>
        {viewAllUrl && (
          <a
            href={viewAllUrl}
            style={{
              color: '#cccd8d',
              fontSize: '8px',
              fontWeight: 700,
              textDecoration: 'none',
              letterSpacing: '0.5px'
            }}
          >
            VIEW ALL →
          </a>
        )}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '10px'
        }}
      >
        {videos.map((video: IVideoItem) => (
          <div
            key={video.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#ffffff',
              borderRadius: '6px',
              border: '1px solid #e2dbb8',
              overflow: 'hidden',
              cursor: 'pointer'
            }}
            onClick={() => onVideoSelect && onVideoSelect(video)}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '80px',
                overflow: 'hidden',
                backgroundColor: '#00205c'
              }}
            >
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.85
                }}
              />
              {video.duration && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: '5px',
                    right: '5px',
                    backgroundColor: 'rgba(0, 32, 92, 0.85)',
                    color: '#ffffff',
                    fontSize: '7px',
                    fontWeight: 700,
                    padding: '2px 5px',
                    borderRadius: '3px'
                  }}
                >
                  {video.duration}
                </span>
              )}
              {video.category && (
                <span
                  style={{
                    position: 'absolute',
                    top: '5px',
                    left: '5px',
                    backgroundColor: '#cccd8d',
                    color: '#00205c',
                    fontSize: '6.5px',
                    fontWeight: 700,
                    padding: '2px 4px',
                    borderRadius: '3px',
                    textTransform: 'uppercase'
                  }}
                >
                  {video.category}
                </span>
              )}
            </div>

            <div
              style={{
                padding: '8px',
                display: 'flex',
                flexDirection: 'column',
                flex: 1
              }}
            >
              <h3
                style={{
                  margin: '0 0 4px',
                  color: '#00205c',
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: '9.5px',
                  fontWeight: 400,
                  lineHeight: 1.25
                }}
              >
                {video.title}
              </h3>

              {video.speaker && (
                <span
                  style={{
                    fontSize: '7px',
                    color: '#71809a',
                    marginTop: 'auto'
                  }}
                >
                  {video.speaker}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoLibrary;
